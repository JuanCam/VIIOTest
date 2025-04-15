# UI VIIO

Welcome to UI VIIO. This is a UI component library elaborated for VIIO.

Deps: yarn, node.

to install dependencies run:

```
yarn
```

to run the storybook please run:

```
yarn storybook
```

and go to the the following URL

```
http://localhost:6006/
```

![Storybook](/public/ui.png)

## Components

### Component's structure

- PricingTierCard

  props:

  ```
  {
    planName: string;
    price: string|number;
    features: string[];
    isFeatured?: boolean;
    ctaText: string;
  }
  ```

  I created a component that it's divided into two, the header and the body.

  It makes sense to create such a structure for a card component so the most
  important info is placed in the header.

  Furthermore this kind of division and tag usage is more semantic and it
  helps screen readers for a11y purposes.

  #### header

  In the header I decided to locate the price and plan name

  ### body

  In the body you can find the features and the cta button.

### Tailwind's strategy

I found useful to define size such as paddings, font sizes, border widths and border radius.

### UX/UI Decissions

I tried to think of a way to implement a component which ui are meaningful to the user
A way to differentiate a featured card form a non-featured one.

Also I tired to apply some interesting transitions when hovering the cta in the card
to make it more charming effect.

### Trade-offs

Since my knowledge in Tailwind is limited, I tried to use it follwing the test guidelines
So I adapted my css knowledge on layouts (flexbox) and use tailwind's mentioned features
in the test. Besides that, I used css animations depending on the components logic to
highlight some component states, and also I added those states to the Storybook testing.