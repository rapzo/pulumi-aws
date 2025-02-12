// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ServiceCatalog
{
    /// <summary>
    /// Manages a Service Catalog Principal Portfolio Association.
    /// 
    /// ## Example Usage
    /// ### Basic Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Aws = Pulumi.Aws;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var example = new Aws.ServiceCatalog.PrincipalPortfolioAssociation("example", new Aws.ServiceCatalog.PrincipalPortfolioAssociationArgs
    ///         {
    ///             PortfolioId = "port-68656c6c6f",
    ///             PrincipalArn = "arn:aws:iam::123456789012:user/Eleanor",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// 
    /// ## Import
    /// 
    /// `aws_servicecatalog_principal_portfolio_association` can be imported using the accept language, principal ARN, and portfolio ID, separated by a comma, e.g.
    /// 
    /// ```sh
    ///  $ pulumi import aws:servicecatalog/principalPortfolioAssociation:PrincipalPortfolioAssociation example en,arn:aws:iam::123456789012:user/Eleanor,port-68656c6c6f
    /// ```
    /// </summary>
    [AwsResourceType("aws:servicecatalog/principalPortfolioAssociation:PrincipalPortfolioAssociation")]
    public partial class PrincipalPortfolioAssociation : Pulumi.CustomResource
    {
        /// <summary>
        /// Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
        /// </summary>
        [Output("acceptLanguage")]
        public Output<string?> AcceptLanguage { get; private set; } = null!;

        /// <summary>
        /// Portfolio identifier.
        /// </summary>
        [Output("portfolioId")]
        public Output<string> PortfolioId { get; private set; } = null!;

        /// <summary>
        /// Principal ARN.
        /// </summary>
        [Output("principalArn")]
        public Output<string> PrincipalArn { get; private set; } = null!;

        /// <summary>
        /// Principal type. Setting this argument empty (e.g., `principal_type = ""`) will result in an error. Valid value is `IAM`. Default is `IAM`.
        /// </summary>
        [Output("principalType")]
        public Output<string?> PrincipalType { get; private set; } = null!;


        /// <summary>
        /// Create a PrincipalPortfolioAssociation resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PrincipalPortfolioAssociation(string name, PrincipalPortfolioAssociationArgs args, CustomResourceOptions? options = null)
            : base("aws:servicecatalog/principalPortfolioAssociation:PrincipalPortfolioAssociation", name, args ?? new PrincipalPortfolioAssociationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private PrincipalPortfolioAssociation(string name, Input<string> id, PrincipalPortfolioAssociationState? state = null, CustomResourceOptions? options = null)
            : base("aws:servicecatalog/principalPortfolioAssociation:PrincipalPortfolioAssociation", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing PrincipalPortfolioAssociation resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PrincipalPortfolioAssociation Get(string name, Input<string> id, PrincipalPortfolioAssociationState? state = null, CustomResourceOptions? options = null)
        {
            return new PrincipalPortfolioAssociation(name, id, state, options);
        }
    }

    public sealed class PrincipalPortfolioAssociationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
        /// </summary>
        [Input("acceptLanguage")]
        public Input<string>? AcceptLanguage { get; set; }

        /// <summary>
        /// Portfolio identifier.
        /// </summary>
        [Input("portfolioId", required: true)]
        public Input<string> PortfolioId { get; set; } = null!;

        /// <summary>
        /// Principal ARN.
        /// </summary>
        [Input("principalArn", required: true)]
        public Input<string> PrincipalArn { get; set; } = null!;

        /// <summary>
        /// Principal type. Setting this argument empty (e.g., `principal_type = ""`) will result in an error. Valid value is `IAM`. Default is `IAM`.
        /// </summary>
        [Input("principalType")]
        public Input<string>? PrincipalType { get; set; }

        public PrincipalPortfolioAssociationArgs()
        {
        }
    }

    public sealed class PrincipalPortfolioAssociationState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
        /// </summary>
        [Input("acceptLanguage")]
        public Input<string>? AcceptLanguage { get; set; }

        /// <summary>
        /// Portfolio identifier.
        /// </summary>
        [Input("portfolioId")]
        public Input<string>? PortfolioId { get; set; }

        /// <summary>
        /// Principal ARN.
        /// </summary>
        [Input("principalArn")]
        public Input<string>? PrincipalArn { get; set; }

        /// <summary>
        /// Principal type. Setting this argument empty (e.g., `principal_type = ""`) will result in an error. Valid value is `IAM`. Default is `IAM`.
        /// </summary>
        [Input("principalType")]
        public Input<string>? PrincipalType { get; set; }

        public PrincipalPortfolioAssociationState()
        {
        }
    }
}
