---
layout: blog
title: Mailchimp Data Visualization
date: 2023-04-05T03:49:13.952Z
thumbnail: mailchimpdataviz-9a6610d6aab382c799bbf34f707059bf-1-.png
---
One of my first projects at Mailchimp was to help redefine our visual guidelines for how we present data. I worked with our design system Product Designer and infrastructure Staff Engineer.

For this deliverable, our goals were to:

1. Provide a number of color combinations with appropriate color contrast (in both Figma and code).
2. Publish first phase of our refactored charts from Dojo to [React D3](https://react-d3-library.github.io/).

## Defining Color Combinations

![Six combinations of colors for proper visual contrast used in Mailchimp charts.](http://localhost:8000/static/colorCombo-2c33a400e3ad9b33f679b83933758485.png)

We did not have design guidelines on using color within our charts. Color combination decisions were typically left up to product teams. With our large selection of brand colors, this introduced potential issues that could make our visualizations inaccessible to users with color blindness or low-vision.

At the time of the project, we still had various way to implement charts in the codebase so we made the color combinations accessible through 1) Less tokens and 2) class names. Our tokens were combination names set up as an array of values. We then took those tokens and created a [recursive mixin](https://lesscss.org/features/#mixins-feature-loops-feature) to generate the CSS class names.

## Refactoring to React D3

![Line charts using new color combination palettes.](http://localhost:8000/static/dataviz-cf0fa5b086da2b3515d0a8eb5faf1759.png)

Our charting system was originally built in Dojo mixed with various charting libraries. This project was the first phase of refactoring charts from Dojo to [React D3](https://react-d3-library.github.io/).

[Mailchimp's data visualization guidelines](https://ux.mailchimp.com/product/patterns/data).