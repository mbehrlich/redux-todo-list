class Api::TodosController < ApplicationController

  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages
    end
  end

  def update
    @todo = Todo.find_by(id: params[:id])

    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages
    end
  end

  def destroy
    @todo = Todo.find_by(id: params[:id])
    deleted_todo = @todo
    @todo.destroy

    render json: deleted_todo
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end


end
