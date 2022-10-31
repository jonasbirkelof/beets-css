<style>
.callout {
	border-radius: 6px;
	border-left-width: 6px;
	font-size: 16px;
}
.callout-header {
	padding: 8px 16px;
}
.callout-body {
	padding: 16px;
}
.callout-icon {
	margin-right: 16px;
}
</style>

# Callout

A callout can be used as a short information notice. Unlike the Bootstrap alert, this is not meant to call for the users attention when an action has happened.

The callout has a parent class `.callout` and two child classes: `.callout-header` and `.callout-body`.

<div class="demo">
	<div class="callout callout-primary text-dark">
		<div class="callout-header">
			<div class="callout-icon"><i class="fa-solid fa-info-circle"></i></div>
			Header
		</div>
		<div class="callout-body">
			Body
		</div>
	</div>
	<div class="callout callout-primary text-dark mb-0">
		<div class="callout-header">Header</div>
		<div class="callout-body">
			Body
		</div>
	</div>
</div>
````html
<div class="callout callout-primary">
	<div class="callout-header">
		<div class="callout-icon">
			<i class="fa-solid fa-info-circle"></i>
		</div>
		Header
	</div>
	<div class="callout-body">
		Body
	</div>
</div>

<div class="callout callout-primary">
	<div class="callout-header">Header</div>
	<div class="callout-body">
		Body
	</div>
</div>
````

## Styling

You can use all of the Bootstrap theme colors with the callout. Just add the `.callout-{theme-color}` class to the parent `.callout` class to style it.

<div class="demo">
	<div class="callout callout-primary text-dark">
		<div class="callout-header">
			<div class="callout-icon"><i class="fa-solid fa-question-circle"></i></div>
			Primary
		</div>
		<div class="callout-body">
			Body
		</div>
	</div>
	<div class="callout callout-secondary text-dark">
		<div class="callout-header">
			<div class="callout-icon"><i class="fa-solid fa-quote-right"></i></div>
			Secondary
		</div>
		<div class="callout-body">
			Body
		</div>
	</div>
	<div class="callout callout-success text-dark">
		<div class="callout-header">
			<div class="callout-icon"><i class="fa-solid fa-check"></i></div>
			Success
		</div>
		<div class="callout-body">
			Body
		</div>
	</div>
	<div class="callout callout-warning text-dark">
		<div class="callout-header">
			<div class="callout-icon"><i class="fa-solid fa-exclamation-triangle"></i></div>
			Warning
		</div>
		<div class="callout-body">
			Body
		</div>
	</div>
	<div class="callout callout-danger text-dark">
		<div class="callout-header">
			<div class="callout-icon"><i class="fa-solid fa-bolt"></i></div>
			Danger
		</div>
		<div class="callout-body">
			Body
		</div>
	</div>
	<div class="callout callout-info text-dark">
		<div class="callout-header">
			<div class="callout-icon"><i class="fa-solid fa-info-circle"></i></div>
			Info
		</div>
		<div class="callout-body">
			Body
		</div>
	</div>
	<div class="callout callout-light text-dark">
		<div class="callout-header">
			<div class="callout-icon"><i class="fa-solid fa-heart"></i></div>
			Light
		</div>
		<div class="callout-body">
			Body
		</div>
	</div>
	<div class="callout callout-dark text-dark mb-0">
		<div class="callout-header">
			<div class="callout-icon"><i class="fa-solid fa-pen"></i></div>
			Dark
		</div>
		<div class="callout-body">
			Body
		</div>
	</div>
</div>
````html
<div class="callout callout-primary">...</div>
<div class="callout callout-secondary">...</div>
<div class="callout callout-success">...</div>
<div class="callout callout-warning">...</div>
<div class="callout callout-danger">...</div>
<div class="callout callout-info">...</div>
<div class="callout callout-light">...</div>
<div class="callout callout-dark">...</div>
````

## Icons

Tha callout has an `.callout-icon` class that can wrap an icon to give it a right margin. It can be used in the `.callout-header` and `.callout-body`.

## Header

The header background has a lighter version of the theme color. You can use the header without the body if you just want a quick info with some coloring.

<div class="demo">
	<div class="callout callout-primary text-dark">
		<div class="callout-header">
			<div class="callout-icon"><i class="fa-solid fa-info-circle"></i></div>
			Header
		</div>
	</div>	
	<div class="callout callout-primary text-dark mb-0">
		<div class="callout-header">Header</div>
	</div>
</div>
````html
<div class="callout callout-primary">
	<div class="callout-header">
		<div class="callout-icon"><i class="fa-solid fa-info-circle"></i></div>
		Header
	</div>
</div>	

<div class="callout callout-primary">
	<div class="callout-header">Header</div>
</div>
````

## Body

The body can contain the information you want to communicate. It can be used without the header for a more compact style, and of course with an icon.

<div class="demo">
	<div class="callout callout-primary text-dark">
		<div class="callout-body d-flex justify-content-start">
			<div class="callout-icon"><i class="fa-solid fa-arrow-right"></i></div>
			Body
		</div>
	</div>
	<div class="callout callout-primary text-dark mb-0">
		<div class="callout-body">
			Body
		</div>
	</div>
</div>
````html
<div class="callout callout-primary">
	<div class="callout-header">
		<div class="callout-icon"><i class="fa-solid fa-info-circle"></i></div>
		Header
	</div>
</div>	

<div class="callout callout-primary">
	<div class="callout-header">Header</div>
</div>
````