# Next.js movie site

This is a Hulu type app created using the latest in front-end tech:

- React
- Next.js
- Tailwind.css with JIT compiler
- TMDB API
- Heroicons

Have a look here: https://hulu-tailwind.vercel.app/

### Thoughts on Tailwind

This is my first time using Tailwind and I have to say that I am impressed. Whilst the sheer numbers of classes seemed ridiculous at first with a simple extension for VS Code ([Tailwind CSS IntelliSense - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) it made the experience a breeze.

The idea of “Atomic” utility type CSS has been my general M.O for some time where possible, however this can be quite difficult to implement when collaborating with developers as everyone has preferred methods or naming conventions. Also when working on smaller side projects it does feel like quite a rigmarole to set up which can push towards more component based frameworks such as Bulma or Bootstrap. Whilst completely functional does remove some of the fun of crafting your own components.

This for me is Tailwind’s greatest strength as it allows quick styling whilst not leaving the DOM. There are some clear downsides such as extremely messy HTML and less control of global styling with the quick change of a variable. That said I feel that there may be some tricks that I am not aware of as only scratched the surface. All in all I think when thinking in reusable component terms as you do in React I feel that Tailwind is a fantastic tool to speed up development process as it keeps you thinking in CSS whilst not needing to leave the JSX.
