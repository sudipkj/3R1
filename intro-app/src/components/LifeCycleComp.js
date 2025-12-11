import React from 'react';

class LifeCycleComp extends React.Component {
  constructor(props) {
    super(props);
    // Initializing state
    this.state = {
      data: 'Loading...',
      errorOccurred: false,
      counter: 0,
    };
    
    // Binding this for a method that will update the counter
    this.incrementCounter = this.incrementCounter.bind(this);
    
    console.log('1. Constructor - Component is being constructed');
  }

  // Mounting: Executed when the component is about to mount
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps - Preparing state from props');
    // For now, we just return null, no state changes based on props
    return null;
  }

  // Mounting: Executed after the component is mounted (ideal for API calls)
  componentDidMount() {
    console.log('4. componentDidMount - Component mounted');
    
    // Simulating data fetching after the component has mounted
    this.timer = setTimeout(() => {
      this.setState({ data: 'Data loaded from API!' });
    }, 15000);

    // Simulating counter increments every second
    this.interval = setInterval(this.incrementCounter, 45000);
  }

  // Method to increment counter in the state
  incrementCounter() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  // Updating: Determines if the component should re-render
  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate - Should re-render?', nextState);
    
    // Only re-render if the data has changed or counter is even
    if (nextState.data !== this.state.data || nextState.counter % 2 === 0) {
      return true; // Allow re-render
    }
    return false; // Prevent re-render
  }

  // Updating: Capture something from the DOM before update (like scroll position)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. getSnapshotBeforeUpdate - Before DOM update');
    // Returning null since no snapshot is needed here
    return null;
  }

  // Updating: Executes after the component updates
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. componentDidUpdate - Component updated', prevState);
    // For demo, we check if data has changed, then log a message
    if (prevState.data !== this.state.data) {
      console.log('Data was updated:', this.state.data);
    }
  }

  // Unmounting: Called when the component is being removed
  componentWillUnmount() {
    console.log('8. componentWillUnmount - Cleanup before unmounting');
    
    // Clear timers to avoid memory leaks
    clearTimeout(this.timer);
    clearInterval(this.interval);
  }

  // Error Handling: Updates state if an error occurs during rendering
  static getDerivedStateFromError(error) {
    console.log('9. getDerivedStateFromError - Error occurred');
    // Update state to show fallback UI
    return { errorOccurred: true };
  }

  // Error Handling: Executed when an error is caught
  componentDidCatch(error, info) {
    console.log('10. componentDidCatch - Logging error info', info);
    // Optionally, log the error to an external service
  }

  // Required render method for rendering UI
  render() {
    console.log('3. render - Rendering component UI');
    
    // If an error occurred, show fallback UI
    if (this.state.errorOccurred) {
      return <div>Error: Something went wrong.</div>;
    }

    return (
      <div>
        <h1>Component Lifecycle Methods</h1>
        <p>Data: {this.state.data}</p>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}

export default LifeCycleComp;