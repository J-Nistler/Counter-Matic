const json_resp = document.getElementById('json_response')
const USAGE = JSON.parse(json_resp.textContent);
json_resp.textContent = ""

const USAGE_TEST = [
    {
        "platform": "ProQuest",
        "database": "AGRICOLA",
        "metric": "Searches_Automated",
        "06/01/21": "1494",
        "07/01/21": "1680"
    },
    {
        "platform": "ProQuest",
        "database": "AGRICOLA",
        "metric": "Searches_Regular",
        "06/01/21": "38",
        "07/01/21": "14"
    },
    {
        "platform": "ProQuest",
        "database": "AGRICOLA",
        "metric": "Total_Item_Investigations",
        "06/01/21": "46",
        "07/01/21": "34"
    },
]