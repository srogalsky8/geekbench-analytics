hasSqldf <- require("sqldf")
if (!hasSqldf) {
    install.packages("sqldf")
}
library(sqldf)
data <- read.csv(file='dist/surface-latest-50.csv', header=TRUE)
sqldf("SELECT name, cpu, AVG(singleCoreScore), AVG(multiCoreScore), count(*) as 'numTests'
FROM data 
WHERE name LIKE 'Microsoft Corporation%' 
GROUP BY name, cpu
ORDER BY AVG(singleCoreScore) DESC")