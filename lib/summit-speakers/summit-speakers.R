library("jsonlite")

slashNToBr <- function(str){
  result = gsub("\n", "<br>", str)
  return(result)
}

data = read.csv2("summit-speakers.csv", header=TRUE, sep=",")

l = lapply(1:nrow(data), FUN=function(i){
  list(activity = data[i,]$activity,
       name = data[i,]$name,
       name_en = data[i,]$name_en,
       title = slashNToBr(data[i,]$title),
       issue = data[i,]$issue,
       introduction = slashNToBr(data[i,]$introduction),
       img_path = data[i,]$img_path
  )
})

json = toJSON(l, pretty = TRUE, auto_unbox = TRUE)
write(json, "summit-speakers.json")
