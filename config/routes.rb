Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :cons, only: [:create, :destroy, :show, :index, :update]
    resources :boards, only: [:create, :destroy, :show, :index, :update]
  end
  root to: 'static_pages#root'
end
