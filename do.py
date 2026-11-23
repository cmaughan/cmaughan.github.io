#!/usr/bin/env python3
import argparse
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parent
LOCAL_URL = "http://localhost:1313/"
PREVIEW_WIDTH = 720


def serve() -> int:
    command = [
        "hugo",
        "server",
        "--bind",
        "127.0.0.1",
        "--baseURL",
        LOCAL_URL,
        "--buildDrafts",
    ]
    return subprocess.run(command, cwd=ROOT, check=False).returncode


def preview_command(
    source: Path,
    output: Path,
    start: float,
    duration: float,
    crop: str | None = None,
    crf: int = 28,
) -> list[str]:
    """Build the ffmpeg command for a short, silent, looping tile preview.

    ``crop`` is an ffmpeg crop spec (``w:h:x:y``) applied before scaling, handy for
    trimming a webcam inset out of a screen recording.  Small sources are not upscaled.
    """
    filters = [f"crop={crop}"] if crop else []
    filters += [f"scale='min({PREVIEW_WIDTH},iw)':-2:flags=lanczos", "fps=30"]
    return [
        "ffmpeg",
        "-y",
        "-ss",
        f"{start:g}",
        "-t",
        f"{duration:g}",
        "-i",
        str(source),
        "-an",
        "-vf",
        ",".join(filters),
        "-c:v",
        "libx264",
        "-preset",
        "slow",
        "-crf",
        str(crf),
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        str(output),
    ]


def preview(
    source: Path,
    output: Path,
    start: float,
    duration: float,
    crop: str | None = None,
    crf: int = 28,
) -> int:
    output.parent.mkdir(parents=True, exist_ok=True)
    command = preview_command(source, output, start, duration, crop, crf)
    return subprocess.run(command, cwd=ROOT, check=False).returncode


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Personal site helper")
    subcommands = parser.add_subparsers(dest="command", required=True)
    subcommands.add_parser("serve", help=f"serve the site locally at {LOCAL_URL}")
    preview_parser = subcommands.add_parser(
        "preview", help="cut a short silent MP4 loop for a portfolio tile"
    )
    preview_parser.add_argument("source", type=Path, help="source video")
    preview_parser.add_argument("output", type=Path, help="output .mp4 path")
    preview_parser.add_argument("--start", type=float, default=0.0, help="start time in seconds")
    preview_parser.add_argument("--duration", type=float, default=5.0, help="loop length in seconds")
    preview_parser.add_argument("--crop", help="ffmpeg crop w:h:x:y applied before scaling")
    preview_parser.add_argument(
        "--crf", type=int, default=28, help="x264 quality; raise it to shrink noisy clips"
    )

    args = parser.parse_args(argv)
    if args.command == "serve":
        return serve()
    if args.command == "preview":
        return preview(args.source, args.output, args.start, args.duration, args.crop, args.crf)

    parser.error(f"unknown command: {args.command}")
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
