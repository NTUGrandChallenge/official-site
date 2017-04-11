library("jsonlite")

slashNToBr <- function(str){
  result = gsub("\n", "<br>", str)
  return(result)
}

data = read.table("summit-speakers.csv", header=TRUE, sep=",")

l = lapply(1:nrow(data), FUN=function(i){
  list(activity = data[i,]$activity,
       name = data[i,]$name,
       title = data[i,]$title,
       issue = data[i,]$issue,
       introduction = slashNToBr(data[i,]$introduction)
  )
})

json = toJSON(l, pretty = TRUE, auto_unbox = TRUE)
write(json, "summit-speakers.json")
