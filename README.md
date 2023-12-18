# Final Project: Coffee Website

## Project Introduction

This project contains Login, Home, Learn, Shop, PaleceOrder, Join and Chat pages. Besides that, also designed Cafe Locations, Coffee Bean Origins, Privacy Policy and Contact Us pages in the footer.

Users can learn about coffee, shop and chat on the website.

## Directory Structure
```
/final
|-- /src
|-- /public
|-- /.eslintrc.cjs
|-- index.html
|-- messages.js
|-- users.js
|-- server.js
|-- sessions.js
|-- packages.json
|-- packages-lock.json
|-- vite.config.js
|-- REQUIREMENTS.md
|-- README.md
|-- gitignore
```

## Main Function

There will be a Loading prompt when the page loads and the user must enter a valid username before logging in (letters or numbers only, no 'dog'), the logout button is on the Chat Page.   

After logging in, the user will see the Home Page. It contains a `skip to main content link` to make navigating sites easier and less laborious for keyboard-only users. On the left side of the header, there is a button to switch modes, which can be clicked to change the color of the page. There is also a hover button on the right side of the page that can be clicked to change the username, the user can also close it.  

The Home Page contains a carousel of images that can be switched between by clicking on the left and right buttons.  

The Learn Page consists of three paragraphs that can be expanded by clicking on the `+` sign drop down, showing different content.  

The Shop Page has a total of six different products that can be added to the cart. Clicking on the "View Cart" button will enter the Place Order Page, which contains information about all the products that have been added to the shopping cart. You can change the quantity, and you can also check the `Same as Shipping Address` checkbox to automatically fill in the "Billing Information".  

Users can join the membership on the Join Page, where "Flavor Preferences" is a dropdown with "other", and an additional field is displayed to fill in when "other" is selected.  

The Chat Page displays all online users and all sent chat messages and automatically updates the content every 5 seconds. Users can send new messages and logout of their accounts.  

There are a number of other pages in the footer of the page that contain many other features to explore. For example, in the Coffee Bean Origins Page you can view different categories by selecting the origin.  

Most of these pages are designed with two different CSS for web and mobile sizes.

## Installation Instructions

Run with `npm install`, `npm run build`, `npm start`.

## Photo Licence

All photos are from unsplah, the licence is https://unsplash.com/license.

logo: https://images.unsplash.com/photo-1572286258217-40142c1c6a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80  

carousel-1: https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80  
carousel-2: https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80  
carousel-3: https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80ca  

coffee1: https://images.unsplash.com/photo-1613399421011-1e634fa4dacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80  
coffee2: https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80  
coffee3: https://images.unsplash.com/photo-1577392648386-000e77cbc962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80  
coffee4: https://images.unsplash.com/photo-1420624226293-19b680e38dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2008&q=80  
coffee5: https://images.unsplash.com/photo-1502458051560-7f33ac46fda3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80  
coffee6: https://images.unsplash.com/photo-1455560460927-c48345dd421d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80  
coffee7: https://images.unsplash.com/photo-1561986810-4f3ba2f46ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80  
coffee8: https://images.unsplash.com/photo-1510688773642-f74d8a4a0a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80  
coffee9: https://images.unsplash.com/photo-1519082274554-1ca37fb8abb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80  

bg pic: https://images.unsplash.com/photo-1521834100799-d805ca040e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80  

coffee shop1: https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80  
coffee shop2: https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80  

arabica: https://images.unsplash.com/photo-1508854597-b25191cc5962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80  
robusta: https://images.unsplash.com/photo-1501492673258-2bcfc17241fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80  
typica: https://images.unsplash.com/photo-1504627298434-2119d6928e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80  
bourbon: https://images.unsplash.com/photo-1515701238541-0cb8d3165120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80  
caturra: https://images.unsplash.com/photo-1495862433577-132cf20d7902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80  
liberica: https://images.unsplash.com/photo-1518553300442-dc00435b8b20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80  
kona: https://images.unsplash.com/photo-1529229089-f5719a804879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80
