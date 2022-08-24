import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //state
    todos : string[] = [];
    todoText  = '';
    // lifecycle
    ngOnInit() {
        const existingTodos = localStorage.getItem('todos');
        if (existingTodos) {
            this.todos = JSON.parse(existingTodos);
        }

    }

    //events
    addTodo() {
        this.todos.push(this.todoText);
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.todoText = '';
    }

}
