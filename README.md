# My Blog Built with React

A blog site made with React with a Django backedn and hosted on Firebase. You can check out the live 
blog site at https://blog.cooperkyle.com


# To-Do
- [x] Re-configure the backend API (Need to decide on provider and tech to do so) - Used django restframework 
- [ ] Broke font-awesome import with build. Remove from top of main.css import: @import url(fontawesome-all.min.css);
- [x] Implmenet safer SQL handling on backend -- Used Django Rest Framework with ORM
- [ ] Write a first post! 
- [x] Overide default Firebase 404 and errors with custom page
- [ ] Correct 404 for if there is not a blog post at a specific URL setup redirect to 404.
- [x] Fix IMAGE in single post -- when using markdown can use a rendered to a function passing in props to add a span and image tag, then add in the css class
- [ ] Fix Date in top right hand corner
- [ ] Add an avatar for a user (default one)? or remove entierly
- [ ] Menu bar in top right needs attention
- [ ] Figure out breackpoint ReferenceERror error
- [ ] Update with better READMe file
- [ ] Fix footer with correct links and fonts
- [ ] Implment a back button on the single post page
- [ ] Change query in URL to have title instead. Should still pull an ID to query
ex. https://blog.cooperkyle.com/post/3 becomes https://blog.cooperkyle.com/post/Welcome