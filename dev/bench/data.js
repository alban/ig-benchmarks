window.BENCHMARK_DATA = {
  "lastUpdate": 1678371264494,
  "repoUrl": "https://github.com/alban/inspektor-gadget",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "alban",
            "username": "alban"
          },
          "committer": {
            "name": "alban",
            "username": "alban"
          },
          "id": "d2d734df3010fc2421323ba79c0afc900aac0b88",
          "message": "Alban benchmarks",
          "timestamp": "2021-10-06T10:40:11Z",
          "url": "https://github.com/alban/inspektor-gadget/pull/4/commits/d2d734df3010fc2421323ba79c0afc900aac0b88"
        },
        "date": 1678363540735,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 204601980,
            "unit": "ns/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1947880,
            "unit": "ns/op",
            "extra": "615 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotSocketTracer",
            "value": 1852679081,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTracerDNS",
            "value": 1038590858,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alban",
            "username": "alban"
          },
          "committer": {
            "name": "alban",
            "username": "alban"
          },
          "id": "cdb50e9540703479e3b399cd26fa0f7595819451",
          "message": "Alban benchmarks",
          "timestamp": "2021-10-06T10:40:11Z",
          "url": "https://github.com/alban/inspektor-gadget/pull/4/commits/cdb50e9540703479e3b399cd26fa0f7595819451"
        },
        "date": 1678371263769,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkSnapshotProcessEBPFTracer",
            "value": 162715889,
            "unit": "ns/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotProcessProcfsTracer",
            "value": 1886536,
            "unit": "ns/op",
            "extra": "654 times\n2 procs"
          },
          {
            "name": "BenchmarkSnapshotSocketTracer",
            "value": 1055996252,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTracerDNS",
            "value": 614505412,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          }
        ]
      }
    ]
  }
}