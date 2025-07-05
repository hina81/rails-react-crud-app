Rails.application.routes.draw do
  root to: "home#index"

  namespace :api do
    resources :events, only: %i[index show create destroy update]
  end
end
