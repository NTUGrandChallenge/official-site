library("jsonlite")

splitBySlashN <- function(input){
  str = toString(input)
  return(unlist(strsplit(str, '\n')))
}

data = read.table("third.csv", header=TRUE, sep=",")

l = lapply(1:nrow(data), FUN=function(i){
  list(name = data[i,]$name,
       title = data[i,]$title,
       expertises = splitBySlashN(data[i,]$expertises),
       experiences = splitBySlashN(data[i,]$experiences),
       imageUrl = paste0('../assets/img/judge/third_', i, '.jpg')
       )
})

json = toJSON(l, pretty = TRUE, auto_unbox = TRUE)
write(json, "third.json")
