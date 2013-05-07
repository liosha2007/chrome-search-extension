
$(function(){
    $('#searchText').focus();
    $('#searchText').keyup(function(e) {
        if(e.keyCode == 13){
            $('#searchButton').click();
        }
    });
    $('#searchButton').click(function (){
        var searchText = $('#searchText').val()
        chrome.tabs.getSelected(null, function(tab) {
            var host = tab.url.split('/')[2];
            chrome.tabs.update(tab.id, {
                url: 'https://www.google.com/search?q=' + searchText + '+site:' + host
            });
        });
    });
});
