#!/usr/bin/env python3
import argparse
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parent
LOCAL_URL = "http://localhost:1313/"


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


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Personal site helper")
    subcommands = parser.add_subparsers(dest="command", required=True)
    subcommands.add_parser("serve", help=f"serve the site locally at {LOCAL_URL}")

    args = parser.parse_args(argv)
    if args.command == "serve":
        return serve()

    parser.error(f"unknown command: {args.command}")
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
