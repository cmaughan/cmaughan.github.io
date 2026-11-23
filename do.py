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


def preview_command(source: Path, output: Path, start: float, duration: float) -> list[str]:
    """Build the ffmpeg command for a short, silent, looping tile preview."""
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
        f"scale={PREVIEW_WIDTH}:-2:flags=lanczos,fps=30",
        "-c:v",
        "libx264",
        "-preset",
        "slow",
        "-crf",
        "28",
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        str(output),
    ]


def preview(source: Path, output: Path, start: float, duration: float) -> int:
    output.parent.mkdir(parents=True, exist_ok=True)
    command = preview_command(source, output, start, duration)
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

    args = parser.parse_args(argv)
    if args.command == "serve":
        return serve()
    if args.command == "preview":
        return preview(args.source, args.output, args.start, args.duration)

    parser.error(f"unknown command: {args.command}")
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
