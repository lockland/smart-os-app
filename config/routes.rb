Rails.application.routes.draw do
  root "ui#index"
  get "up" => "rails/health#show", as: :rails_health_check
end
