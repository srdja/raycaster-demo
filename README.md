#### Raycasting renderer written in Clojure


Try the live demo at [raycaster-demo](http://blog.srdja.me/raycaster-demo)


#### Running the project
- To run run this project you'll need to have [Leiningen](http://leiningen.org) installed first.  

- Now that you have Leiningen installed `cd` into the project directory and run `lein deps`.  
  This will pull all the necessary dependencies.
  
- After that, while still in the project root, run: `lein cljsbuild auto dev`. This will automatically
  recompile you clojure code to javascript whenever you make any changes to the source files. If the
  fails or run `lein cljsbuild clean` to clear all generated files first. 
  
- Once you've done done all that, you can open the index file (`resources/public/index.html`) in you 
  browser to see the changes.
