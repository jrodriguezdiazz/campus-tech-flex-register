package models

type Student struct {
    ID       int    `json:"id"`
    Code     string `json:"code"`
    Name     string `json:"name"`
    LastName string `json:"last_name"`
    Birthday string `json:"birthday"`
    Sex      string `json:"sex"`
}
