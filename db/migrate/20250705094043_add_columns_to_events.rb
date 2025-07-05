class AddColumnsToEvents < ActiveRecord::Migration[8.0]
  def change
    add_column :events, :event_type, :string
    add_column :events, :event_date, :date
    add_column :events, :title, :string
    add_column :events, :speaker, :string
    add_column :events, :host, :string
    add_column :events, :published, :boolean
  end
end
