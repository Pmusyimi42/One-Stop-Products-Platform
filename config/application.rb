require "rails"
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
require "rails/test_unit/railtie"
require "rack/cors"

Bundler.require(*Rails.groups)

module OneStopProductsPlatform
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
    
    # Enable CORS to accept requests from https://one-stop-products-frontend-pmusyimi42.vercel.app/
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'https://one-stop-products-frontend-pmusyimi42.vercel.app'
        resource '*', headers: :any, methods: [:get, :post, :put, :delete, :options]
      end
    end
    
    # Disable caching
    config.middleware.use Rack::Deflater
    config.middleware.insert_before 0, Rack::Cache, {
      metastore:    URI.encode("file:/dev/null"),
      entitystore:  URI.encode("file:/dev/null"),
      verbose:     false,
      allow_reload: false,
      allow_revalidate: false,
      expires_in: 0
    }, {
      public: true,
      must_revalidate: true,
      no_cache: true,
      no_store: true,
      private: false,
      max_age: 0
    }
  end
end
