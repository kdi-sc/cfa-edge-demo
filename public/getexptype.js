function getExperienceType() {
    var experienceType = "Desktop";

    if (Number(document.documentElement.clientWidth) < 960) {
        experienceType = "Mobile";
    } else if (window.matchMedia("(orientation: landscape)") && (Number(document.documentElement.clientHeight) < 960)) {
        experienceType = "Mobile";
    }

    return experienceType;
}

window.digitalData =
{
    'page': {
        'category': {
            'pageType': 'Home Page', 'restaurantNumber': '30001', 'restaurantName': 'YongeandBloor', 'restaurantCity': 'Toronto', 'restaurantState': 'ON'
        },
        'pageInfo': {
            'destinationURL': 'http://www.chick-fil-a.ca/',
            'experienceType': getExperienceType(),
            'pageName': 'Home of the Original Chicken Sandwich',
            'sysEnv': 'Prod'
        }
    },
    'user': {
        'profile': {
            'profileInfo': {
                'loginStatus': 'not-logged-in',
                'profileID': ''
            }
        }
    }
};