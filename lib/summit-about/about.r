library("jsonlite")

data = read.table("about.csv", header=TRUE, sep=",")
l = lapply(1:nrow(data), FUN=function(i){
  list(type = data[i,]$type,
       imgSrc = data[i,]$imgSrc,
       url = data[i,]$url
  )
})

json = toJSON(l, pretty = TRUE, auto_unbox = TRUE)
write(json, "partners.json")
