library("jsonlite")

getLinks <- function(i){
  links = list()
  if(data[i,]$link1 != ''){
    tmp = list()
    tmp[["link_name"]] = data[i,]$link1_name
    tmp[["url"]] = data[i,]$link1
    links[[1]] = tmp
    if(data[i,]$link2 != ''){
      tmp = list()
      tmp[["link_name"]] = data[i,]$link2_name
      tmp[["url"]] = data[i,]$link2
      links[[2]] = tmp
    }
  }
  return(links)
}
getAgree <- function(i){
  if(data[i,]$agree == "否，所有成員皆不同意公開。"){
    return(FALSE)
  }else{
    return(TRUE)
  }
}
getMembers <- function(i){
  members = list()
  if(data[i,]$name1 != ''){
    tmp = list()
    tmp[["name"]] = data[i,]$name1
    tmp[["role"]] = data[i,]$role1
    members[[1]] = tmp
  }
  if(data[i,]$name2 != ''){
    tmp = list()
    tmp[["name"]] = data[i,]$name2
    tmp[["role"]] = data[i,]$role2
    members[[2]] = tmp
  }
  if(data[i,]$name3 != ''){
    tmp = list()
    tmp[["name"]] = data[i,]$name3
    tmp[["role"]] = data[i,]$role3
    members[[3]] = tmp
  }
  if(data[i,]$name4 != ''){
    tmp = list()
    tmp[["name"]] = data[i,]$name4
    tmp[["role"]] = data[i,]$role4
    members[[4]] = tmp
  }
  if(data[i,]$name5 != ''){
    tmp = list()
    tmp[["name"]] = data[i,]$name5
    tmp[["role"]] = data[i,]$role5
    members[[5]] = tmp
  }
  if(data[i,]$name6 != ''){
    tmp = list()
    tmp[["name"]] = data[i,]$name6
    tmp[["role"]] = data[i,]$role6
    members[[6]] = tmp
  }
  return(members)
}

data = read.table("data.csv", header=TRUE, sep=",")

l = lapply(1:nrow(data), FUN=function(i){
  list(team_name = data[i,]$team_name,
       team_id = data[i,]$team_id,
       slogan = data[i,]$slogan,
       observation = data[i,]$observation,
       challenge_definotion = data[i,]$challenge_definition,
       product_introduction = data[i,]$product_introduction,
       team_introduction = data[i,]$team_introduction,
       self_question = data[i,]$self_question,
       self_answer = data[i,]$self_answer,
       links = getLinks(i),
       agree = getAgree(i),
       members = getMembers(i)
       )
})

json = toJSON(l, pretty = TRUE, auto_unbox = TRUE)
write(json, "20teams.json")
