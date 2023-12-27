$(document).ready(function() {
    $(".sharex-download").on("mouseenter click", function() {
        $(this).off("mouseenter click");

        GetLatestReleaseInfo();
    });
});

function GetLatestReleaseInfo() {
    $.getJSON("https://api.github.com/repos/cmedieval/Downloads/releases/latest").done(function(release) {
        UpdateDownloadButton(release, ".exe", $(".Conquermedieval"));
        UpdateDownloadButton(release, ".rar", $(".Conquermedieval_"));
        UpdateDownloadButton(release, ".rar", $(".set_update"));        
    });

    $.getJSON("https://api.github.com/repos/cmedieval/Downloads/releases/latest").done(function(release) {
        UpdateDownloadButton(release, ".exe", $(".sharex-dev-build"));
    });
}

function UpdateDownloadButton(release, assetExtension, element) {
    let asset = release.assets.find(asset => asset.name.endsWith(assetExtension));
    let releaseInfo = "Versão: " + release.tag_name.substring(1) +
        "\nTamanho do arquivo: " + (asset.size / 1024 / 1024).toFixed(2) + " MB" +
        "\nData da versão: " + new Date(asset.updated_at).toLocaleDateString("pt-BR") +
        "\nTotal Download: " + asset.download_count.toLocaleString();

    element.attr("href", asset.browser_download_url);
    element.attr("title", releaseInfo);
    element.tooltip({
        trigger: "hover"
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Data de início do projeto (no formato AAAA-MM-DD)
    var startDate = new Date('2022-01-01');

    // Função para calcular a diferença em dias
    function calculateDays() {
        var currentDate = new Date();
        var timeDiff = currentDate - startDate;
        var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        return daysDiff;
    }

    // Atualizar o contador
    function updateCounter() {
        var counterElement = document.getElementById('counter');
        counterElement.textContent = 'Dias desde o início do projeto: ' + calculateDays();
    }

    // Atualizar o contador ao carregar a página
    updateCounter();

    // Atualizar o contador a cada segundo
    setInterval(updateCounter, 1000);
});
