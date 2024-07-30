## FOODTRENDSCANNER
# Project Description
FoodTrendScanner is an AI-driven system designed to identify emerging food trends by analyzing social media posts, news articles, and recipe websites. The system utilizes advanced natural language processing techniques to sift through vast amounts of text data, detecting patterns and mentions of new culinary preferences, ingredients, and cooking methods. By providing real-time insights into evolving food trends, FoodTrendScanner assists food industry professionals, chefs, and culinary enthusiasts in staying ahead of the curve and innovating within their respective domains


# Problem statement
In our day to day lives most of us have reached a point in which you are confused on what you want to cook either by being bored repeating the same food over a long period of time or you want to experience something different but not quite sure what that is.
Food enthusiasts have longed for a variety of cuisines and dishes yet current websites and articles do not share Kenyan dishes.
Communication between food enthusiasts is cut short hence no growth of skills and sharing of new ideas hence preferences do not change concerning food.
Marriages have also been an issue since the two are from different cultural backgrounds and the dishes are also different. Coming to common ground on delicacies to prepare becomes an issue and most end up eating specific dishes such as rice and ugali on a day to day.

Concrete example:
Allrecipes | Recipes, How-Tos, Videos and More- This website offers only Ethiopian dishes in the whole of East Africa.
World Food Atlas: Discover 17206 Local Dishes & Ingredients (tasteatlas.com)- This website offers local and international dishes but only offers static content.
Kenyan Food: 25 Most Popular Kenyan Dishes to Try Out - Chef's Pencil (chefspencil.com)- This website does not offer communication between users.
# Solution Architecture
Our solution is an app “The Food Trend” is designed to efficiently handle and analyze vast amounts of text data from multiple sources, providing real-time insights into food trends. The system is composed of the following key components:
. Traditional methods of identifying food trends, such as surveys and market research, often fail to capture real-time shifts in consumer behavior.
Data Collection Module:
Social media platforms, news websites, and recipe websites.
Technologies: Web scraping tools and APIs.
Preprocessing Module:
Cleaning, deduplication, and normalization of text data.
Technologies: Python scripts, NLTK
Natural Language Processing (NLP) Module:
Text analysis, pattern recognition, and trend detection.
Technologies: Pytorch for deep learning models, sentiment analysis, and topic modeling.
Backend Module:
Flask-based server to handle requests and process data.
Database: PostgreSQL for storing and managing data.
Frontend Module:
React.js-based user interface for displaying insights and trends.
API Architecture:
REST API for communication between the frontend and backend.

# Implementation Architecture.
Data Collection:
Social media data is collected using APIs (e.g., Twitter API) and web scraping tools for news articles and recipe websites.
Collected data is stored in a PostgreSQL database.
Preprocessing:
Text data is cleaned to remove noise such as HTML tags, special characters, and stop words using Python scripts.
Deduplication is performed to ensure unique entries.
Normalization converts text to a consistent format (e.g., lowercasing).

NLP Module:

Text Analysis: Utilizes Pytorch to build and train deep learning models for sentiment analysis and trend detection.
Pattern Recognition: Applies topic modeling techniques to identify common themes and trends.
Trend Detection: Monitors the frequency and context of specific keywords and phrases to detect emerging trends.
Backend:
Flask server handles data processing requests and communicates with the PostgreSQL database.
REST API endpoints are created for data retrieval and analysis results.
Frontend:
React.js is used to build a dynamic and responsive user interface.
The interface displays real-time insights, trend visualizations, and detailed analysis.

# How the Implementation Architecture solves the problems: 
FoodTrendScanner is designed to address various issues faced by individuals and food enthusiasts in their daily lives, as well as challenges related to cultural diversity in food preferences. Here’s how the system's implementation architecture helps solve these problems:
Confusion and Boredom with Daily Cooking Choices

- Data Collection from Diverse Sources :  FoodTrendScanner collects data from social media, recipe websites, and news articles, providing a broad spectrum of culinary options.
- Real-Time Trend Analysis: By analyzing current trends, the system suggests new and exciting recipes that are gaining popularity, ensuring users have access to the latest culinary innovations.
- Personalized Recommendations: Using user preferences and past behavior, the system can recommend dishes tailored to individual tastes, reducing the confusion and monotony of daily meal choices.

 Lack of Representation of Kenyan Dishes on Current Websites
- Inclusion of Diverse Data Sources: The system explicitly includes data from Kenyan food blogs, recipe websites, and social media channels focused on Kenyan cuisine.
- User-Generated Content: The platform encourages users to share their own recipes and culinary experiences, increasing the representation of Kenyan dishes.

 Limited Communication and Skill Sharing Among Food Enthusiasts
- Community Engagement Features: The platform has live chat features to facilitate interaction among users.
- Collaborative Features: Users can share recipes, cooking tips, and experiences, promoting a collaborative learning environment.
- Skill Development Content: Provides access to tutorials and expert advice to help users improve their culinary skills.

 Cultural Differences in Food Preferences in Marriages
- Cultural Fusion Recipes: The system suggests fusion recipes that combine elements from different cultures, helping couples find common ground.
- Customized Meal Plans: Tailors meal plans to include dishes from both cultures, promoting variety and mutual satisfaction.
- Educational Content: Provides information on the cultural significance and preparation of various dishes, fostering appreciation and understanding.
 
# Implementation Details:
- NLP Models: Process and analyze data from the different sources.
- User Profiles: Store and utilize user-specific data to personalize meal plans and recommendations.
- Machine Learning Models: Pytorch-based models analyze text data to identify emerging food trends and user preferences.
- Frontend Interface: The React.js interface allows users to browse and discover new recipes easily.
- Data Collection Module: Ensures a wide range of data sources, including those specific to Kenyan cuisine.
- Community Features: The React.js frontend supports user submissions and interactions, fostering a rich repository of Kenyan recipes.

- Backend Support: Flask-based server handles real-time communication features and data management.
- Interactive UI: React.js frontend offers a user-friendly interface for engaging with the community and accessing skill-building content.

# Conclusion
FoodTrendScanner effectively addresses these specific problems through its comprehensive and advanced implementation architecture. By leveraging technologies such as React.js for the frontend, Flask and Python for the backend, PostgreSQL for data management and Pytorch for NLP, the system offers a robust solution for staying ahead of food trends and catering to diverse culinary needs. The architecture ensures that users receive personalized, real-time recommendations, fostering a richer culinary experience and promoting cultural inclusivity in food choices.

