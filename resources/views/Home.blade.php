<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="_token" content="{!! csrf_token() !!}"/>

        <title>LaraVue</title>

        <!-- Fonts -->
       <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body>
        <div id="app">
            <App></App>
        </div>         
    </body>
    <script src="{{asset('js/app.js')}}"></script>
</html>
