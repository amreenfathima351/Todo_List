$(".plus").click(function () {
  
var input = $(".todo-input").val();
if (input === "") {
    alert("Please enter something!");
  }
else {
  var listItem = $("<li class='todo-list'>").text(input);
  var deleteButton = $(
    "<button class='delBtn'><i class='fa-solid fa-trash'></i></button>"
  );
  var checkBox = $("<input class='check' type='checkbox'/>");
  listItem.append(deleteButton);
  listItem.prepend(checkBox);
  $(".container").append(listItem);
  $(".todo-input").val("");
  deleteButton.click(function () {
    listItem.remove();
  });
  checkBox.click(function () {
    if (checkBox.is(":checked")) {
      listItem.addClass("checked");
    }
    else {
      listItem.removeClass("checked");
    }
  })
  }
})