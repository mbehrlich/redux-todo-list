class Step < ActiveRecord::Base
  validates :title, :todo_id, presence: true

  belongs_to :todo
end
