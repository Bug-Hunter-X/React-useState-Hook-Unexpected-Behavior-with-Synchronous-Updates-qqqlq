```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Functional update
    setCount(prevCount => prevCount + 1); // Functional update - works correctly now
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```