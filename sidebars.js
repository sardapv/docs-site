module.exports = {
  someSidebar: {
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Features: ['mdx'],
  },
  cSildeBars: {
    'C-Language': [
      "C/get-started",
      {
        type: "category",
        label: "Introduction",
        collapsed: true,
        items: [
        "C/basics",
        "C/io-statements",
        "C/functions",
        "C/operations"
        ],
      }, {
        type: "category",
        label: "Conditions and Statements",
        collapsed: true,
        items: [
          "C/conditions",
          "C/loops",
          "C/break-continue",
          "C/switch-case",
          "C/goto"
        ],
      },
    ],
  },
  pySlideBars: {
    Python: [
      'Python/get-started',
    ]
  },
  flutterSlideBasr: {
    Flutter: [
      "Flutter/get-started",
      {
        type: "category",
        label: "Get Started",
        collapsed: true,
        items: [
          "Flutter/install",
          "Flutter/ide",
        ],
      },
      {
        type: "category",
        label: "Let's Start",
        collapsed: true,
        items: [
          "Flutter/first-app",
          "Flutter/tips-tricks",
        ]
      },
      {
        type: "category",
        label: "Chapters",
        collapsed: true,
        items: [
          "Flutter/Chapters/vvc",
          "Flutter/Chapters/calculator",
        ]
      },
      {
        type: "category",
        label: "Dart Core Packages",
        collapsed: true,
        items: [
          "Flutter/Core/async",
          "Flutter/Core/collection",
          "Flutter/Core/convert",
          "Flutter/Core/core",
          "Flutter/Core/developer",
          "Flutter/Core/math",
          "Flutter/Core/typed-data",
        ]
      },
    ],
  }
};
