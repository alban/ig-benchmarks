window.BENCHMARK_DATA = {
  "lastUpdate": 1678363541243,
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
      }
    ]
  }
}