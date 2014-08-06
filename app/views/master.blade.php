<html>
	<body>
		@section('slidebar')
			this is the master sidebar.
		@show

		<div class="container">
			@yield('content')
		</div>

	</body>
</html>