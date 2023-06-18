files=$(find portfolio -type f)

echo "FILES TO BE ADDED:"
for f in $files; do
    title=$(echo $f | grep -o /../.\* | grep -o "[A-Za-z_.]\{3,\}")
    echo $title
done


# PL

echo "
<!DOCTYPE html>
<html lang="pl">

<head>
    <title>FH | Portfolio</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../assets/css/main.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/font/bootstrap-icons.css">
    <script src="/assets/js/reusable_component.js" type="text/javascript" defer></script>
</head>

<body class="light-theme">
    <header-pl></header-pl>
    <div class="page-container">
        <side-panel-pl></side-panel-pl>
        <div class="content-container">
        <table>
            <tr>
                <th>Plik</th>
                <th>Język</th>
            </tr>
" > pl/portfolio.html

for f in $files; do
    title=$(echo $f | grep -o /../.\* | grep -o "[A-Za-z_.]\{3,\}")
    lang=$(echo $f | grep -o /../ | grep -o [a-z].)
    echo "
            <tr>
                <td><a href=\"/$f\">$title</a></td>
                <td>$lang</td>
            </tr>" >> pl/portfolio.html
done

echo "
        </table>
        </div>
    </div>
</body>

</html>
" >> pl/portfolio.html


# EN

echo "
<!DOCTYPE html>
<html lang="en">

<head>
    <title>FH | Portfolio</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../assets/css/main.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/font/bootstrap-icons.css">
    <script src="/assets/js/reusable_component.js" type="text/javascript" defer></script>
</head>

<body class="light-theme">
    <header-en></header-en>
    <div class="page-container">
        <side-panel-en></side-panel-en>
        <div class="content-container">
        <table>
            <tr>
                <th>File</th>
                <th>Language</th>
            </tr>
" > en/portfolio.html

for f in $files; do
    title=$(echo $f | grep -o /../.\* | grep -o "[A-Za-z_.]\{3,\}")
    lang=$(echo $f | grep -o /../ | grep -o [a-z].)
    echo "
            <tr>
                <td><a href=\"/$f\">$title</a></td>
                <td>$lang</td>
            </tr>" >> en/portfolio.html
done

echo "
        </table>
        </div>
    </div>
</body>

</html>
" >> en/portfolio.html
