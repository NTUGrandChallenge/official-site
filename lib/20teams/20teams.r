library("jsonlite")

slashNToBr <- function(str){
  result = gsub("\n", "<br>", str)
  return(result)
}
getLinks <- function(i){
  links = list()
  if(data[i,]$link1 != ''){
    tmp = list()
    tmp[["name"]] = data[i,]$link1_name
    tmp[["url"]] = data[i,]$link1
    links[[1]] = tmp
    if(data[i,]$link2 != ''){
      tmp = list()
      tmp[["name"]] = data[i,]$link2_name
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
    tmp[["name"]] = slashNToBr(data[i,]$name1)
    tmp[["role"]] = slashNToBr(data[i,]$role1)
    members[[1]] = tmp
  }
  if(data[i,]$name2 != ''){
    tmp = list()
    tmp[["name"]] = slashNToBr(data[i,]$name2)
    tmp[["role"]] = slashNToBr(data[i,]$role2)
    members[[2]] = tmp
  }
  if(data[i,]$name3 != ''){
    tmp = list()
    tmp[["name"]] = slashNToBr(data[i,]$name3)
    tmp[["role"]] = slashNToBr(data[i,]$role3)
    members[[3]] = tmp
  }
  if(data[i,]$name4 != ''){
    tmp = list()
    tmp[["name"]] = slashNToBr(data[i,]$name4)
    tmp[["role"]] = slashNToBr(data[i,]$role4)
    members[[4]] = tmp
  }
  if(data[i,]$name5 != ''){
    tmp = list()
    tmp[["name"]] = slashNToBr(data[i,]$name5)
    tmp[["role"]] = slashNToBr(data[i,]$role5)
    members[[5]] = tmp
  }
  if(data[i,]$name6 != ''){
    tmp = list()
    tmp[["name"]] = slashNToBr(data[i,]$name6)
    tmp[["role"]] = slashNToBr(data[i,]$role6)
    members[[6]] = tmp
  }
  return(members)
}

getIsTen <- function(i){
  if(data[i,]$isTen == 1){
    return(TRUE)
  }
  else{
    return(FALSE)
  }
}

getQas <- function(i){
  qas = list()
  if(data[i,]$q1 != ''){
    tmp = list()
    tmp[["question"]] = slashNToBr(data[i,]$q1)
    tmp[["answer"]] = slashNToBr(data[i,]$a1)
    qas[[1]] = tmp
  }
  if(data[i,]$q2 != ''){
    tmp = list()
    tmp[["question"]] = slashNToBr(data[i,]$q2)
    tmp[["answer"]] = slashNToBr(data[i,]$a2)
    qas[[2]] = tmp
  }
  if(data[i,]$q3 != ''){
    tmp = list()
    tmp[["question"]] = slashNToBr(data[i,]$q3)
    tmp[["answer"]] = slashNToBr(data[i,]$a3)
    qas[[3]] = tmp
  }
  if(data[i,]$q4 != ''){
    tmp = list()
    tmp[["question"]] = slashNToBr(data[i,]$q4)
    tmp[["answer"]] = slashNToBr(data[i,]$a4)
    qas[[4]] = tmp
  }
  return(qas)
}

data = read.table("data.csv", header=TRUE, sep=",")

l = lapply(1:nrow(data), FUN=function(i){
  list(team_name = slashNToBr(data[i,]$team_name),
       team_id = data[i,]$team_id,
       field = data[i,]$field,
       slogan = slashNToBr(data[i,]$slogan),
       observation = slashNToBr(data[i,]$observation),
       challenge_definition = slashNToBr(data[i,]$challenge_definition),
       product_introduction = slashNToBr(data[i,]$product_introduction),
       team_introduction = slashNToBr(data[i,]$team_introduction),
       self_question = data[i,]$self_question,
       self_answer = slashNToBr(data[i,]$self_answer),
       links = getLinks(i),
       agree = getAgree(i),
       members = getMembers(i),
       isTen = getIsTen(i),
       qas = getQas(i)
       )
})

json = toJSON(l, pretty = TRUE, auto_unbox = TRUE)
write(json, "20teams.json")
