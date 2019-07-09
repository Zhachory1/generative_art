package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_nodejs//:defs.bzl", "http_server", "rollup_bundle")
load("@build_bazel_rules_nodejs//internal/web_package:web_package.bzl", "web_package")

web_package(
    name = "package",
    assets = [
        # For differential loading, we supply both an ESModule entry point and an es5 entry point
        # The injector will put two complimentary script tags in the index.html
        "//third_party/p5:p5.min.js",
        "//src:main.js",
        "//src:main.css",
    ],
    # data = ["favicon.png"],
    index_html = "//:index.html",
)

http_server(
    name = "server",
    data = [":package"],
    templated_args = ["package"],
)
