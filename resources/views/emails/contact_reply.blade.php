@php
    $setting = App\Models\SystemSetting::first();
@endphp
<!DOCTYPE html>
<html>

<head>
    <title>Contact Reply</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }

        header {
            padding: 20px;
            text-align: center;
        }

        header h1 {
            margin: 0;
        }

        header img {
            max-width: 150px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
        }

        .message {
            margin-top: 20px;
            padding: 10px;
        }

        footer {
            display: flex;
            justify-content: space-evenly;
            padding: 10px;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <header>
        <img src="{{ isset($setting) && $setting->logo ? asset('storage/uploads/settings/' . $setting->logo) : '' }}"
            alt="Your Website Logo">
        <h1>{{ $object }}</h1>
    </header>

    <div class="container">
        <p><strong>Message:</strong></p>
        <div class="message">{{ $body }}</div>
    </div>

    <footer>
        <p>{{ $setting->website_name }}</p>
        <p>{{ $setting->website_url }}</p>
        <p>{{ $setting->phone }}</p>
    </footer>
</body>

</html>
