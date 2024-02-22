This app is simple enough that you should be able to understand it on your own. Let’s address the main points to highlight what is happening in the code above.

The top-most component of this app is the App component. The App component returns the Main component. The Main component accepts a single attribute, named msg, as in “message”.

At the very top of the app, the Main function declares how the Main component should behave. The Main component is responsible for rendering the Header component. Note that when the Header component is rendered from inside Main, it also receives the msg prop.

The Header component’s function declaration renders an h1 that reads “Header here”, then another component named Wrapper. Note that the naming here is irrelevant – the components Header and Wrapper are named to make it a bit more like it might appear in a real app – but ultimately, the focus is on having multiple components, rather than describing specific component names properly.

So, the Header component’s function declaration has a return statement, which renders the Wrapper component with the msg prop passed to it.

In the Wrapper component’s function declaration, there’s an h2 that reads “Wrapper here”, in addition to the rendering of the Button component, which also receives the msg attribute.

Finally, the Button component’s function declaration is coded to receive the props object, then inside of the wrapping div, show an h3. The h3 reads “This is the Button component”, and then, under that, there’s a button element with an onClick event-handling attribute. This is passed to an arrow function which should alert the string that comes from the props.msg prop.

All this code results in the following UI rendered on the screen:
The three components rendered on screen.

This screenshot illustrates the boundaries of each component. The Main component can’t be found in the UI because it’s just rendering the Header component. The Header component then renders the Wrapper component, and the Wrapper component then renders the Button component.

Note that the string that was passed on and on through each of the children component’s props’ objects is not found anywhere. However, it will appear when you click the “Click me!” button, as an alert:
The message pop up triggered by clicking the button.

The alert’s message reads “I passed through the Header and the Wrapper and I reached the Button component”.

That’s really all there is to it. Props drilling simply means passing a prop through props objects through several layers of components. The more layers there are, the more repetitive and unnecessary this feels. There are various ways to deal with this, as you’ll learn in the lesson items that follow.
