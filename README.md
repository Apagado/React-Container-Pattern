Benefits of This Approach
	* Better separation of concerns. You understand your app and your UI better by writing components this way.
	* Better reusability. You can use the same presentational component with completely different state sources, and turn those into separate container components that can be further reused.
	* Presentational components are essentially your app’s “palette”. You can put them on a single page and let the designer tweak all their variations without touching the app’s logic. You can run screenshot regression tests on that page.
	* This forces you to extract “layout components” such as Sidebar, Page, ContextMenu and use this.props.children instead of duplicating the same markup and layout in several container components.
