class Api::StepsController < ApplicationController

  def index
    @steps = Step.find_by(todo_id: params[:todo_id])
    render json: @steps
  end

  def create
    @step = Step.new(step_params)
    @step.todo_id = params[:todo_id]
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update
    @step = Step.find_by(id: params[:id])
    if @step.update(todo_params)
      render json: @step
    else
      render json: @step.errors.full_messages
    end
  end

  def destroy
    @step = Step.find_by(id: params[:id])
    deleted_step = @step
    @step.destroy

    render json: deleted_step
  end

  private

  def step_params
    params.require(:step).permit(:title)
  end

end
