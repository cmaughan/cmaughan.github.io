import unittest
from pathlib import Path
from unittest.mock import patch

import do


class ServeCommandTests(unittest.TestCase):
    def test_serve_runs_hugo_server_on_localhost(self):
        with patch("subprocess.run") as run:
            run.return_value.returncode = 0
            result = do.main(["serve"])

        self.assertEqual(result, 0)
        run.assert_called_once_with(
            [
                "hugo",
                "server",
                "--bind",
                "127.0.0.1",
                "--baseURL",
                "http://localhost:1313/",
                "--buildDrafts",
            ],
            cwd=do.ROOT,
            check=False,
        )


class PreviewCommandTests(unittest.TestCase):
    def test_preview_command_makes_silent_faststart_loop(self):
        command = do.preview_command(Path("in.mp4"), Path("out.mp4"), 1.5, 4)

        self.assertEqual(command[:7], ["ffmpeg", "-y", "-ss", "1.5", "-t", "4", "-i"])
        self.assertIn("-an", command)
        self.assertIn("scale=720:-2:flags=lanczos,fps=30", command)
        self.assertIn("+faststart", command)
        self.assertEqual(command[-1], "out.mp4")

    def test_preview_subcommand_runs_ffmpeg(self):
        with patch("subprocess.run") as run, patch.object(Path, "mkdir"):
            run.return_value.returncode = 0
            result = do.main(["preview", "in.mp4", "out/clip.mp4", "--start", "2", "--duration", "3"])

        self.assertEqual(result, 0)
        self.assertEqual(run.call_args.args[0][:6], ["ffmpeg", "-y", "-ss", "2", "-t", "3"])


if __name__ == "__main__":
    unittest.main()
