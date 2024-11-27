<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon"
        href="{{ isset($settings) && $settings->favicon ? asset('storage/uploads/settings/' . $settings->favicon) : '' }}"
        type="image/x-icon">
    @vite('resources/css/app.css')
    <title>{{ $settings->website_name }}</title>
    {{-- @foreach ($pixels as $pixel)
        <script>
            {!! $pixel->code !!}
        </script>
    @endforeach --}}
</head>

<body>
    <div id="app"></div>
    @viteReactRefresh
    @vite('resources/js/app.js')

</body>

</html>
