@extends('master')

@section('slidebar')
	@parent
	<p>this is Appended to the master sidebar</p>
@stop

@section('content')
	<p>this is my body content.</p>
@stop
