document.addEventListener("DOMContentLoaded", function () {
    var spoiler_containers = document.getElementsByClassName('spoiler');
    if (!spoiler_containers) return;
    for (var i = 0; i < spoiler_containers.length; ++i) {
        var spoiler_headers=spoiler_containers[i].getElementsByClassName('spoiler-header');
        if(spoiler_headers)
        {
            for (var j = 0; j < spoiler_headers.length; ++j)
            {
                
                spoiler_headers[j].onclick = function () {
                    var target=this.parentNode;
                    var isExpanded = /(^| )spoiler-expanded( |$)/.test(target.className);
                    console.log(isExpanded);
                    target.className = isExpanded ?
                    target.className.replace(/(^| )spoiler-expanded( |$)/, '$1spoiler-collapsed$2') :
                    target.className.replace(/(^| )spoiler-collapsed( |$)/, '$1spoiler-expanded$2');
                }
            }
        }



        
    }
})