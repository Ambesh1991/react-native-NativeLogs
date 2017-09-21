
Pod::Spec.new do |s|
  s.name         = "RNReactNativeNativeLogs"
  s.version      = "1.0.0"
  s.summary      = "RNReactNativeNativeLogs"
  s.description  = <<-DESC
                  RNReactNativeNativeLogs
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNReactNativeNativeLogs.git", :tag => "master" }
  s.source_files  = "RNReactNativeNativeLogs/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  