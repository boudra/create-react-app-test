If you're having trouble selecting elements in your app using the standard queries (byText, byPlaceholder, byRole etc.) I would say that it's a code smell and the first thing you shoudl try is refactoring your code to be accesible with those functions, there's always a way to make them work.


If it's still imposible, other alternatives are:

1. Using `data-testid`:

```
// Component
<div data-testid="special-id">
  Hello world
</div>

// Test
render(<Component />);
expect(screen.getByTestId("special-id")).toBe("Hello world");
```

2. Using the DOM API (not recommended) :rotating-light:

```
// Component
<div>
  Hello world
</div>

// Test
const { container } = render(<Component />);
// `container` is an HTML element
expect(container.querySelector("div").innerHTML).toBe("Hello world");
```
