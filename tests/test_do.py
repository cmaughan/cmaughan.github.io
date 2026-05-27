import unittest
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


if __name__ == "__main__":
    unittest.main()
