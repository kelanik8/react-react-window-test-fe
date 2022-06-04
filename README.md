# Frontend Documentation

In this document you can find all the details needed to work with this project.

### FE Stacks

- Javascript/Typescript

- Styled Components

- Recoil

- Redux

- React

- Next.js

- Prettier

## System requirements

- [Git v2](https://git-scm.com/) and above
- [Node.js v12.22.9](https://nodejs.org/) and above
- [Yarn v1](https://yarn.org) or greater

You should be able to verify all these are installed correctly using:

```
node --version
yarn --version
git --version
```

## Setup

Please go through the following steps to run this project locally:

- 1. Clone this repository with the command `git clone <repo_link>`
- 2. Install all the dependencies using `yarn install`.
- 3. Start the project in development mode using `yarn dev`.
- 4. Run build `yarn build`.

### Architecture

The general idea is to separate data logic / data factory and global state of the application from its UI. That's why we want to keep all the components in the `components` folder and all the global state logic in the `atoms` folder.

**_Styles_**
All components are style with styled components.

The Text block data structures is implemented in the `data/document.ts` file. This contains a factory function, interface that generates automatically the data structure of the Text blocks respectively.

To prevent the UI from collapsing due to a crash from a component, an `ErrorBoundary` component is introduced.

There two major components :

- `Aside` components - This is where the UI and logic of the side nav resides. The atom of the Text blocks state is also loaded into this component on the side nav. Each Menu item toggles an active state which indicates in the background of each menu item, also an event is also emitted to the parent component to update the `activeBlockAtom` state with the active text block.

- `AppContentContainer` component - This is where the UI and Logic of the Virtual List is been implemented. The `generateItems` function creates an flat and uniform alignment of data the Text block and the Nested Text Block to properly render each list item into `react-window`. This data from the `generateItems` is been passed down the `FixedSizeList` component to render each list accordingly. To activate the scrollable feature which scrolls to the corresponding text-block when an item on the sidenav is clicked, `activeBlockAtom` holds the state from the sidenav of the active item, this state is consumed in the `AppContentContainer` component with the useEffect hook which call the `scrollTo` function with the active Id ass the paramenter

#### Components Directory Layout

As mentioned above, all the components are stored inside the `components` folder of the React project. We have several folders inside this folder. To create one source of truth where all components are imported from all components are to be imported into `index.ts` :

```
export { default as NavComponent } from "./NavComponent";
```

**_Structure_**

```
components
    └── AppContainer
        ├── index.tsx
        └── styles.ts
    └── index.ts
```
